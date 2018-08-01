package com.tjo.haat.rest;

import java.util.Arrays;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tjo.haat.email.EmailSender;

@RestController
public class EmailRest {

	@Autowired
    public EmailSender emailSender;
	
	@RequestMapping(value="/email", method = {RequestMethod.POST}, produces = "text/plain;charset=UTF-8")
	@ResponseStatus(HttpStatus.OK)
	public String sendEmail(@RequestParam Map<String,String> allRequestParams) throws Exception{
		
        emailSender.sendEmail(mapToTable(allRequestParams));
		
		return "success";
	}
	
	private String mapToTable(Map<String,String> allRequestParams){
		
		StringBuffer sb = new StringBuffer();
		
		sb.append("<table style='width:300px'>");
		
		for(String key : allRequestParams.keySet()){
			
			sb.append("<tr>");
			
			sb.append("<td>"+key+"</td>");
			sb.append("<td>"+allRequestParams.get(key)+"</td>");
			
			sb.append("</tr>");
		}
		
		sb.append("</table>");
		
		return sb.toString();
	}
}
