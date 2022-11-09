package com.springboot.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Builder;

@Entity
@Builder
@Table(name="Tourist")
public class Tourist  {
	
	@Id
	@GeneratedValue
	private int id;
	private String firstName;
	private String lastName;
	private String gender;
	private int age;
	private String fromPlace;
	private int noOfDays;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getFromPlace() {
		return fromPlace;
	}
	public void setFromPlace(String fromPlace) {
		this.fromPlace = fromPlace;
	}
	public int getNoOfDays() {
		return noOfDays;
	}
	public void setNoOfDays(int noOfDays) {
		this.noOfDays = noOfDays;
	}
	public Tourist(int id, String firstName, String lastName, String gender, int age, String fromPlace, int noOfDays) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
		this.fromPlace = fromPlace;
		this.noOfDays = noOfDays;
	}
	public Tourist() {
		super();
		
	}
	
	
	
	
	}
	
	
	


