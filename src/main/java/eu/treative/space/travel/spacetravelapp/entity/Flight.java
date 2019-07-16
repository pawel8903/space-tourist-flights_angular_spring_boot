package eu.treative.space.travel.spacetravelapp.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "flight")
public class Flight {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "departure")
	private String departure;
	
	@Column(name = "arrival")
	private String arrival;
	
	@Column(name = "numberofseats")
	private int numberOfSeats;
	
	@Column(name = "ticketprice")
	private String ticketPrice;
	
	@ManyToMany(fetch=FetchType.LAZY,cascade= {
			CascadeType.PERSIST,CascadeType.MERGE,CascadeType.DETACH,CascadeType.REFRESH
	})
	@JoinTable(
			name="touristlistofflights",
			joinColumns=@JoinColumn(name="flight_id"),
			inverseJoinColumns=@JoinColumn(name="tourist_id"))
	@JsonIgnoreProperties("flights")
	private List<Tourist> tourists ;

	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDeparture() {
		return departure;
	}
	public void setDeparture(String departure) {
		this.departure = departure;
	}
	public String getArrival() {
		return arrival;
	}
	public void setArrival(String arrival) {
		this.arrival = arrival;
	}
	public int getNumberOfSeats() {
		return numberOfSeats;
	}
	public void setNumberOfSeats(int numberOfSeats) {
		this.numberOfSeats = numberOfSeats;
	}
	public String getTicketPrice() {
		return ticketPrice;
	}
	public void setTicketPrice(String ticketPrice) {
		this.ticketPrice = ticketPrice;
	}
	public List<Tourist> getTourists() {
		return tourists;
	}
	public void setTourists(List<Tourist> tourists) {
		this.tourists = tourists;
	}
	public void addTourist(Tourist tourist) {
		if(tourists == null) {
			tourists = new ArrayList<Tourist>();
		}
		tourists.add(tourist);
	}
	@Override
	public String toString() {
		return "Flight [id=" + id + ", departure=" + departure + ", arrival=" + arrival + ", numberOfSeats="
				+ numberOfSeats + ", ticketPrice=" + ticketPrice + "]";
	}
	
	
}
