package eu.treative.space.travel.spacetravelapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eu.treative.space.travel.spacetravelapp.entity.Flight;
import eu.treative.space.travel.spacetravelapp.entity.Tourist;
import eu.treative.space.travel.spacetravelapp.service.FlightService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/flight")
public class FlightCotroller {

	@Autowired
	private FlightService flightService;
	
	
	@GetMapping("/flightList")
	public List<Flight> getFlights(){
		return flightService.getFlights();
	}
	
	@GetMapping("/{flightId}")
	public Flight getFlight(@PathVariable int flightId) {
	
		Flight flight = flightService.getFlight(flightId);
	
	return flight;
	}
	
	@PostMapping()
	public Flight addFlight(@RequestBody Flight flight) {
		flight.setId(0);
		flightService.saveFlight(flight);
		System.out.println(flight);
		return flight;
	}
	
	@PutMapping()
	public Flight updateFlight(@RequestBody Flight flight) {
		flightService.saveFlight(flight);
		
		return flight;
	}
	
	@DeleteMapping("/{flightId}")
	public String deleteFlight(@PathVariable int flightId) {
		flightService.deleteFlight(flightId);
		
		return "Flight of id: "+flightId+" was delete";
	}
	
}
