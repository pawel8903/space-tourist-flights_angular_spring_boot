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

import eu.treative.space.travel.spacetravelapp.entity.Tourist;
import eu.treative.space.travel.spacetravelapp.service.TouristService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/tourist")
public class TouristController {
	
	@Autowired
	private TouristService touristService;
	
	
	@GetMapping("/touristList")
	public List<Tourist> getTourists(){
		return touristService.getTourists();
	}
	
	@GetMapping("/{touristId}")
	public Tourist getTourist(@PathVariable int touristId) {
	
	Tourist tourist = touristService.getTourist(touristId);
	
	return tourist;
	}
	
	@PostMapping()
	public Tourist addTourist(@RequestBody Tourist tourist) {
		tourist.setId(0);
		touristService.saveTourist(tourist);
		
		return tourist;
	}
	
	@PutMapping()
	public Tourist updateTourist(@RequestBody Tourist tourist) {
		touristService.saveTourist(tourist);
		
		return tourist;
	}
	
	@DeleteMapping("/{touristId}")
	public String deleteTourist(@PathVariable int touristId) {
		touristService.deleteTourist(touristId);
		
		return "Toutist of id: "+touristId+" was delete";
	}
	
	
}
