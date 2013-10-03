<%@ Page Language="C#" %>

<script language="c#" runat="server">

	public void Page_Load(object sender, EventArgs e)
	{
		string name = Request.Form["name"];
		string email = Request.Form["email"];
		string telephone = Request.Form["telephone"];
		string message = Request.Form["message"];

		System.Net.Mail.MailMessage eMail = new System.Net.Mail.MailMessage();
		eMail.IsBodyHtml = true;
		eMail.Body = "Name: " + name + "<br>" + "Email: " + email + "<br>" + "Phone: " + telephone + "<br>" + "Message: " + message;
		eMail.From = new System.Net.Mail.MailAddress("contact@rtlm.co");
		eMail.To.Add("ryan@rtlm.co");
		eMail.Subject = "Website Inquiry";
		System.Net.Mail.SmtpClient SMTP = new System.Net.Mail.SmtpClient();

		SMTP.Credentials = new System.Net.NetworkCredential("sendmail@rtlm.co","a711711");
		SMTP.Host = "localhost";
		SMTP.Send(eMail);

		Response.Redirect("/?email-sent=true");
	}
</script>
