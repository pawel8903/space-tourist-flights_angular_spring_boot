package eu.treative.space.travel.spacetravelapp.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "touristlistofflights")
public class TouristListofFlights implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -8068333354406491619L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tourist_id")
	private int touristId;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "flight_id")
	private int flightId;
}
