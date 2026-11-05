package com.travis.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

import com.travis.backend.models.Weight;
import com.travis.backend.repos.WeightRepo;

@Service
@AllArgsConstructor
public class WeightService {
    private final WeightRepo repo;

    public Weight addWeight(Weight weight){
        return repo.save(weight);
    }

    public List<Weight> getWeights(){
        return repo.findAll();
    }

    public Weight updateWeight(Weight weight, Long id){
        repo.deleteById(id);
        Weight updatedWeight = repo.save(weight);
        return updatedWeight;
    }

    public void deleteWeight(Long id){
        repo.deleteById(id);
    }
}
