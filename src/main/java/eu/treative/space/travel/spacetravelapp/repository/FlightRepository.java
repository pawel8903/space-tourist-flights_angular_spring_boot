package eu.treative.space.travel.spacetravelapp.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import eu.treative.space.travel.spacetravelapp.entity.Flight;

public interface FlightRepository extends Repository<Flight, Integer> {

	List<Flight> findAll();

	Flight findById(int flightId);

	void save(Flight flight);

	void deleteById(int flightId);
	
}
