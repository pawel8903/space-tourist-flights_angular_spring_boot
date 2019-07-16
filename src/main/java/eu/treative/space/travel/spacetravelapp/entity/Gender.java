package eu.treative.space.travel.spacetravelapp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "gender")
public class Gender {

	@Id
	@Column(name = "id")
	private int id;
	
	@Column(name = "gender")
	private String gender;
}
