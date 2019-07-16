package eu.treative.space.travel.spacetravelapp.service;

import java.util.List;

import eu.treative.space.travel.spacetravelapp.entity.Tourist;

public interface TouristService {

	List<Tourist> getTourists();

	Tourist getTourist(int touristId);

	void saveTourist(Tourist tourist);

	void deleteTourist(int touristId);

}
