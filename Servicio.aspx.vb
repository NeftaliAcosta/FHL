Option Explicit On
Option Strict On
Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls
Imports System.Net.Mail
Imports System.Net
Imports System.Web.Services
Imports System.Configuration
Imports System.IO

Partial Class Servicio
    Inherits System.Web.UI.Page





    <WebMethod()>
    Public Shared Function EnviarCorreo(Nombre As String, Email As String, Asunto As String, pais As String, Mensaje As String, mydom As String) As String
        Dim msj As String

        Dim m As MailMessage = New MailMessage()
        Dim smtp As SmtpClient = New SmtpClient()
        Dim Too As String = "neftali@efhcorporativo.com"
        Dim usr As String = "no-reply@efh.com.mx"
        Dim plantilla As String = File.ReadAllText(HttpContext.Current.Server.MapPath("~/EmailTemplate.html"))
        Dim mymensaje As String = String.Format(plantilla, Nombre, Email, Asunto, pais, Mensaje, mydom)

        Try
            m.From = New MailAddress(Email, Nombre)
            m.Subject = Asunto
            m.Headers.Add("Reply-To", Too)
            m.To.Add(New MailAddress(Too))
            m.Body = mymensaje
            m.IsBodyHtml = True
            smtp.Host = "mail.efh.com.mx"
            smtp.Port = 27
            m.Priority = Net.Mail.MailPriority.Normal
            smtp.Credentials = New NetworkCredential(usr, "")
            smtp.Send(m)
            msj = "Mensaje enviado"

        Catch e As Exception
            Console.Write(e.StackTrace)
            msj = "Mensaje no enviado"
        End Try


        Return msj

    End Function


End Class
