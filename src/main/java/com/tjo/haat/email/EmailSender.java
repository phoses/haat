package com.tjo.haat.email;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailSender {

	private static final Logger logger =LoggerFactory.getLogger(EmailSender.class);
	
	@Autowired
    public JavaMailSender emailSender;
	
	@Value("${emailsend.active:false}")
	Boolean emailsendActive;
	
	private String[] receivers = {"ollipekka.lehtonen@saunalahti.fi"};
	
	public void sendEmail(String content) throws Exception{
		
		MimeMessage mimeMessage = emailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, false, "utf-8");
		helper.setText("<h2>Uusi ilmoittautuminen</h2> " + content, true);
		helper.setTo(receivers);
		helper.setSubject("Uusi ilmoittautuminen häihin rekisteröity");
       
        logger.debug("ready to send email subject={}, text={}", helper.getMimeMessage().getSubject(), helper.getMimeMessage().getContent());
        
        if(emailsendActive){
        	emailSender.send(mimeMessage);
        	logger.debug("Email send");
        }
		
	}
}
