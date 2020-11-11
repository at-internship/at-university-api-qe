package com.stepdefinitions;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources",
        strict = true,
        plugin ={"pretty","html:target/cucumber-report"},
        glue ="com.stepdefinitions",
       monochrome = false
)
public class RuncakeTest {

}
