package eu.treative.space.travel.spacetravelapp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="country")
public class Country {

	@Id
	@Column(name = "id")
	private int id;
	
	@Column(name = "country")
	private String country;
}
