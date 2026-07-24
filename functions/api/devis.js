const DESTINATION_EMAIL = "sawara.entreprise@gmail.com";
const SENDER_EMAIL = "Sawara Entreprise <devis@sawara.sn>";

export async function onRequestPost(context) {
  try {
    if (!context.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY est absente de Cloudflare.");
      return jsonResponse({ success: false, message: "Le service d’envoi n’est pas encore configuré." }, 500);
    }

    const contentType = context.request.headers.get("content-type") || "";
    let data;

    if (contentType.includes("application/json")) {
      data = await context.request.json();
    } else {
      const formData = await context.request.formData();
      data = Object.fromEntries(formData.entries());
    }

    // Champ piège invisible : les vrais visiteurs le laissent vide.
    if (String(data._honey || data.website || "").trim()) {
      return jsonResponse({ success: true, message: "Votre demande a bien été envoyée." });
    }

    const nom = clean(data.nom || data.Nom);
    const telephone = clean(data.telephone || data["Téléphone"]);
    const email = clean(data.email || data.Email);
    const prestation = clean(data.prestation || data.Prestation);
    const lieu = clean(data.lieu || data["Type de lieu"]);
    const zone = clean(data.zone || data.Zone);
    const message = clean(data.message || data.Message);

    if (!nom || !telephone || !email || !prestation) {
      return jsonResponse({
        success: false,
        message: "Merci de renseigner le nom, le téléphone, l’adresse e-mail et la prestation souhaitée."
      }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ success: false, message: "L’adresse e-mail indiquée n’est pas valide." }, 400);
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: SENDER_EMAIL,
        to: [DESTINATION_EMAIL],
        reply_to: email,
        subject: `Nouvelle demande de devis — ${nom}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#17231d">
            <h2 style="color:#0f2e20">Nouvelle demande de devis Sawara</h2>
            <table style="width:100%;border-collapse:collapse">
              ${row("Nom", nom)}
              ${row("Téléphone / WhatsApp", telephone)}
              ${row("Adresse e-mail", email)}
              ${row("Prestation", prestation)}
              ${row("Type de lieu", lieu || "Non renseigné")}
              ${row("Zone", zone || "Non renseignée")}
            </table>
            <h3 style="margin-top:24px;color:#0f2e20">Description du besoin</h3>
            <p style="white-space:pre-wrap;line-height:1.6;background:#f4f8f5;padding:16px;border-radius:10px">${escapeHtml(message || "Aucun message ajouté.")}</p>
            <p style="font-size:13px;color:#65736c">Pour répondre au prospect, utilisez simplement le bouton « Répondre » de votre messagerie.</p>
          </div>
        `
      })
    });

    const resendResult = await resendResponse.json().catch(() => ({}));

    if (!resendResponse.ok) {
      console.error("Erreur Resend :", resendResult);
      return jsonResponse({ success: false, message: "L’envoi a échoué. Veuillez réessayer ou nous contacter sur WhatsApp." }, 502);
    }

    return jsonResponse({ success: true, message: "Votre demande a bien été envoyée. Nous vous recontactons rapidement." });
  } catch (error) {
    console.error("Erreur du formulaire de devis :", error);
    return jsonResponse({ success: false, message: "Une erreur est survenue. Veuillez réessayer ou nous contacter sur WhatsApp." }, 500);
  }
}

export function onRequestGet() {
  return jsonResponse({ success: false, message: "Méthode non autorisée." }, 405);
}

function clean(value) {
  return String(value || "").trim().slice(0, 5000);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label, value) {
  return `<tr><td style="padding:10px;border-bottom:1px solid #e2e9e5;font-weight:bold;width:38%">${escapeHtml(label)}</td><td style="padding:10px;border-bottom:1px solid #e2e9e5">${escapeHtml(value)}</td></tr>`;
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}
