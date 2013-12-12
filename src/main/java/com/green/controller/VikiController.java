package com.green.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class VikiController {

	@RequestMapping( method = { RequestMethod.GET,RequestMethod.POST} )
	public String index(ModelMap model) {

		model.addAttribute("message", "Maven Web Project + Spring 3 MVC - welcome()");

		// Spring uses InternalResourceViewResolver and return back index.jsp
		return "vikimain";

	}
	
	@RequestMapping(value = "/welcome", method = { RequestMethod.GET,RequestMethod.POST})
	public String welcome(ModelMap model) {

		model.addAttribute("message", "Maven Web Project + Spring 3 MVC - welcome()");

		// Spring uses InternalResourceViewResolver and return back index.jsp
		return "index";

	}

	@RequestMapping(value = "/welcome/{name}", method = { RequestMethod.GET,RequestMethod.POST})
	public String welcomeName(@PathVariable String name, ModelMap model) {

		model.addAttribute("message", "Maven Web Project + Spring 3 MVC - " + name);
		return "index";

	}
	/**
	 * This is for demonstrate good design
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/vikimain/{date}", method = { RequestMethod.GET,RequestMethod.POST})
	public String vikimain(@PathVariable String date , ModelMap model) {

		model.addAttribute("date", date );

		// Spring uses InternalResourceViewResolver and return back index.jsp
		return "vikimain" + date;

	}
	
	@RequestMapping(value = "/users/{username}/{submenu}", method = { RequestMethod.GET,RequestMethod.POST})
	public String favorites(@PathVariable String username,@PathVariable String submenu,  ModelMap model) {

		model.addAttribute("username", username );


		return "users/" + submenu;

	}

	///media_resources/198359/segments
	@RequestMapping(value = "/media_resources/{id}/segments", method = { RequestMethod.GET,RequestMethod.POST})
	public String segments(@PathVariable String id , ModelMap model) {

		


		return "media_resources";

	}
	
	/**
	 * This maps the same jsp under WEB-INF/pages
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/{bigPath}", method = { RequestMethod.GET,RequestMethod.POST})
	public String bigPath(@PathVariable String bigPath , ModelMap model) {

		model.addAttribute("bigPath", bigPath );


		return bigPath ;

	}
	
	/**
	 * This maps the same jsp under WEB-INF/pages
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/{bigPath}/{middlePath}", method = { RequestMethod.GET,RequestMethod.POST})
	public String middleMenu(@PathVariable String bigPath,@PathVariable String middlePath , ModelMap model) {

		model.addAttribute("bigPath", bigPath );


		return bigPath  + "/" + middlePath;

	}


}