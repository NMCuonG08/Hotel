package com.example.Hotel.Test;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Test {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    Long id;

    @ElementCollection
    @CollectionTable(name = "test_con", joinColumns = @JoinColumn(name = "test_id"))
    @Column(name = "con")
    List<String> con;
}


