package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.entity.Tourist;
import com.springboot.service.TouristService;

@RestController
@RequestMapping("/tourist")
@CrossOrigin(origins="http://localhost:4200/")
public class TouristController {
	@Autowired
	private TouristService service;
	@PostMapping("/add")
	public Tourist saveTourist(@RequestBody Tourist tourist) {
		return service.saveTourist(tourist);
	}
	@GetMapping("/")
	public List<Tourist>getall(){
		return service.getall();
	}
	
	
	
	

}
