package com.tjo.haat.rest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Redirect {

	@RequestMapping({"/paivallinen", "/iltajuhla"})
	public String home() {
		return "index";
	}
}
