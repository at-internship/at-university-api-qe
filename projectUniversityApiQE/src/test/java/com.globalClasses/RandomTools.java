package com.globalClasses;

import java.util.ArrayList;

import com.github.javafaker.Faker;

public class RandomTools{
	
	Faker faker = new Faker();
	
	public long generateNumberPhoneRandomlong() {
		long numberPhone;
		String lada = "312";
		
		int random = (int)(Math.random()*(9999999-0000000+1)+0000000);
		String randomString = lada + String.valueOf(random);
		
		numberPhone =  Long.parseLong(randomString);
		
		return numberPhone;
	}
	
	public String generateNumberPhoneRandomStringOL() {
		String numberPhone;
		String lada = "312";
		
		int random = (int)(Math.random()*(9999999-0000000+1)+0000000);
		int random2 =(int)(Math.random()*(9999999-0000000+1)+0000000);
		numberPhone = lada + String.valueOf(random)+String.valueOf(random2);
			
		return numberPhone;
	}
	
	public String generateNumberPhoneRandomString() {
		String numberPhone;
		String lada = "312";
		
		int random = (int)(Math.random()*(9999999-0000000+1)+0000000);
		numberPhone  = lada + String.valueOf(random);
		
		return numberPhone;
	}
	
	public String randomFirstName() {
		String firstName = faker.name().firstName();
		return firstName;
	}
	
	public String randomLastName() {
		String lastName = faker.name().lastName();
		return lastName;
	}
	
	public String randomFirstNameOL() {
		String firstName = faker.name().firstName()+faker.name().firstName()+faker.name().firstName()+faker.name().firstName()+faker.name().firstName()+faker.name().firstName()+faker.name().firstName()+faker.name().firstName()+faker.name().firstName()+faker.name().firstName()+faker.name().firstName()+faker.name().firstName();
		return firstName;
	}
	
	public String randomLastNameOL() {
		String lastName = faker.name().lastName()+faker.name().lastName()+faker.name().lastName()+faker.name().lastName()+faker.name().lastName()+faker.name().lastName()+faker.name().lastName()+faker.name().lastName();
		return lastName;
	}
	
	public String randomSpecialCharacteres() {
		String specialCharacters = "";
		ArrayList<String> list = new ArrayList<String>();
		
		list.add("#");		list.add("$");		list.add("%");		list.add("&");		list.add("/");
		list.add("(");		list.add(")");		list.add("=");		list.add("?");		list.add("+");
		list.add("*");		list.add("{");		list.add("[");		list.add("}");		list.add("]");
		list.add("-");		list.add("_");		list.add(":");		list.add(";");		list.add(".");
		list.add(",");		list.add("<");		list.add(">");		list.add("@");		list.add("¿");
		list.add("!");
		
		for(int i = 0; i < 24; i++) {
			specialCharacters = specialCharacters+list.get((int) (Math.random()*(25-0+1)+0));
		}
		
		return specialCharacters;
	}
	
	public String randomPokemon() {
		return faker.pokemon().name();
	}
	
	public String randomHacker() {
		return faker.hacker().noun();
	}
	
	public String randomAnimal() {
		return faker.animal().name();
	}
	
	
	
	
	public int randomDays() {
		return (int)(Math.random()*(30-0+1)+0);
	}
	
	
	public String randomAlphanumeric() {
		ArrayList<String> list = new ArrayList<String>();
		
		list.add("zero");		list.add("one");		list.add("two");		list.add("three");		list.add("four");
		list.add("five");		list.add("six");		list.add("seven");		list.add("eight");		list.add("nine");

		int random = (int) (Math.random()*(9-0+1)+0);
		return list.get(random)+ String.valueOf(random);
	}
	
	// ray
	public String idLetters() {
		String id = "";
		ArrayList<String> list = new ArrayList<String>();
		
		list.add("a");		list.add("b");		list.add("c");		list.add("d");		list.add("e");
		list.add("f");		list.add("g");		list.add("h");		list.add("i");		list.add("j");
		list.add("k");		list.add("l");		list.add("m");		list.add("n");		list.add("o");
		list.add("p");		list.add("q");		list.add("r");		list.add("s");		list.add("t");
		list.add("u");		list.add("v");		list.add("w");		list.add("x");		list.add("y");
		list.add("z");
		
		for(int i = 0; i < 24; i++) {
			id = id+list.get((int) (Math.random()*(25-0+1)+0));
		}
		
		return id;
	}
	
	public String idNumber() {
		String id = "";
		ArrayList<String> list = new ArrayList<String>();
		
		list.add("0");		list.add("1");		list.add("2");		list.add("3");		list.add("4");
		list.add("5");		list.add("6");		list.add("7");		list.add("8");		list.add("9");
		
		for(int i = 0; i < 24; i++) {
			id = id+list.get((int) (Math.random()*(9-0+1)+0));
		}
		
		return id;
	}
	
	
	// ray new tools
	
	public String Sprints() {
		String Sprint ="Sprint ";
		ArrayList<String> list = new ArrayList<String>();
		
		list.add("A");		list.add("B");		list.add("C");		list.add("D");		list.add("E");
		list.add("F");		list.add("G");		list.add("H");		list.add("I");		list.add("J");
		list.add("K");		list.add("L");		list.add("M");		list.add("N");		list.add("O");
		list.add("P");		list.add("Q");		list.add("R");		list.add("S");		list.add("T");
		list.add("U");		list.add("V");		list.add("W");		list.add("X");		list.add("Y");
		list.add("Z");
		for(int i = 0; i < 4; i++) {
			Sprint = Sprint+list.get((int) (Math.random()*(25-0+1)+0));
		}
		
		return Sprint + " 20." + String.valueOf((int) (Math.random()*(99-10+1)+10));
	}
	
	public String Tech() {
		String Tech ="";
		ArrayList<String> list = new ArrayList<String>();
		
		list.add("PEGA");		
		list.add("JAVA");		
		list.add(".NET");
		list.add("Cucumber");
		list.add("SpecFlow");
		list.add("Phyton");
		list.add("C++");
		list.add("C#");
		list.add("MySQL");
		list.add("JavaScript");
		list.add("PHP");
		list.add("CSS");
		Tech = list.get((int) (Math.random()*(11-0+1)+0));

		
		return Tech ;
	}
	
	
	
	
}