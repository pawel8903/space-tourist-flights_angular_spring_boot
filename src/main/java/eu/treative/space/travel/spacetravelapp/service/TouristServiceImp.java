package eu.treative.space.travel.spacetravelapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eu.treative.space.travel.spacetravelapp.entity.Tourist;
import eu.treative.space.travel.spacetravelapp.repository.TouristRepository;

@Service
public class TouristServiceImp implements TouristService {

	@Autowired
	private TouristRepository touristRepository;
	@Override
	public List<Tourist> getTourists() {
		
		return touristRepository.findAll();
	}

	@Override
	public Tourist getTourist(int touristId) {
		return touristRepository.findById(touristId);
	}

	@Override
	public void saveTourist(Tourist tourist) {
		touristRepository.save(tourist);
		
	}

	@Override
	public void deleteTourist(int touristId) {
		touristRepository.deleteById(touristId);
		
	}

}
