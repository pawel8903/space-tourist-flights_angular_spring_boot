package eu.treative.space.travel.spacetravelapp.service;

import java.util.List;

import eu.treative.space.travel.spacetravelapp.entity.Flight;

public interface FlightService {

	List<Flight> getFlights();

	Flight getFlight(int flightId);

	void saveFlight(Flight flight);

	void deleteFlight(int flightId);

}
