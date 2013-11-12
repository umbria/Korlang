package com.green.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class BaseController {

	@RequestMapping(value = "/welcome", method = RequestMethod.GET)
	public String welcome(ModelMap model) {

		model.addAttribute("message", "Maven Web Project + Spring 3 MVC - welcome()");

		// Spring uses InternalResourceViewResolver and return back index.jsp
		return "index";

	}

	@RequestMapping(value = "/welcome/{name}", method = RequestMethod.GET)
	public String welcomeName(@PathVariable String name, ModelMap model) {

		model.addAttribute("message", "Maven Web Project + Spring 3 MVC - " + name);
		return "index";

	}
	/**
	 * This is for demonstrate good design
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/vikimain", method = RequestMethod.GET)
	public String vikimain(ModelMap model) {

		model.addAttribute("message", "Maven Web Project + Spring 3 MVC - welcome()");

		// Spring uses InternalResourceViewResolver and return back index.jsp
		return "vikimain";

	}
	/**
	 * This is for testing some css, you can remove or add or something
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/kormain", method = RequestMethod.GET)
	public String kormain(ModelMap model) {

		model.addAttribute("message", "Maven Web Project + Spring 3 MVC - welcome()");

		// Spring uses InternalResourceViewResolver and return back index.jsp
		return "kormain";

	}
	/**
	 * This is the layout to be the final version. The name should be changed by public domain
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/korean", method = RequestMethod.GET)
	public String korlang(ModelMap model) {

		model.addAttribute("message", "Maven Web Project + Spring 3 MVC - welcome()");

		// Spring uses InternalResourceViewResolver and return back index.jsp
		return "korean";

	}
}