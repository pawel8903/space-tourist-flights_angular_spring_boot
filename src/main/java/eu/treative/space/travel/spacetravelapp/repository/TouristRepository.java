package eu.treative.space.travel.spacetravelapp.repository;
import java.util.List;

import org.springframework.data.repository.Repository;

import eu.treative.space.travel.spacetravelapp.entity.Tourist;

public interface TouristRepository extends Repository<Tourist,Integer> {
	
	 List<Tourist> findAll();
	 
	 Tourist findById(int touristId);
	 
	 void save(Tourist tourist);
	 
	 void deleteById(int touristId);
	
}
