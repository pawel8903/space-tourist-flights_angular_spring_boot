package eu.treative.space.travel.spacetravelapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eu.treative.space.travel.spacetravelapp.entity.Flight;
import eu.treative.space.travel.spacetravelapp.repository.FlightRepository;

@Service
public class FlightServiceImp implements FlightService {

	@Autowired
	private FlightRepository flightRepository;
	@Override
	public List<Flight> getFlights() {
		
		return flightRepository.findAll();
	}

	@Override
	public Flight getFlight(int flightId) {
		return flightRepository.findById(flightId);
	}

	@Override
	public void saveFlight(Flight flight) {
		flightRepository.save(flight);
		
	}

	@Override
	public void deleteFlight(int flightId) {
		flightRepository.deleteById(flightId);
	}

}
