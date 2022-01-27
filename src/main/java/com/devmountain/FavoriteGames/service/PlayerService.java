package com.devmountain.FavoriteGames.service;

import com.devmountain.FavoriteGames.Repository.PlayerRepository;
import com.devmountain.FavoriteGames.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {

    @Autowired
    private final PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public Player addPlayer(Player player){
        return playerRepository.save(player);
    }

    public Player updatePlayer(Player player){ return playerRepository.save(player);}

    public List<Player> findAllPlayers(){ return playerRepository.findAll();}

    public Player findPlayerById(Long id){
        return playerRepository.findPlayerById(id);
    }

    public Player findPlayerByUserName(String userName){
        return playerRepository.findPlayerByUserName(userName);
    }
}
