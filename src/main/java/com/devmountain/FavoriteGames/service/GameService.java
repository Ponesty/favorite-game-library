package com.devmountain.FavoriteGames.service;

import com.devmountain.FavoriteGames.Repository.GameRepository;
import com.devmountain.FavoriteGames.model.Game;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GameService {
    private final GameRepository gameRepository;

    @Autowired
    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    //Posting new game to table
    public Game addGame(Game game){
        return gameRepository.save(game);
    }

    //getting all games in the table.
    public List<Game> findAllGames(){
        return gameRepository.findAll();
    }

    //updating current games info
    public Game updateGame(Game game){
        return gameRepository.save(game);

    }

    public Game findGameById(Long id){
        return gameRepository.findGameById(id);
    }

    //finding games with specific playerId
    public List<Game> findAllGamesByPlayerId(Long id) {return gameRepository.findAllGamesByPlayerId(id);}

    //deleting game in table.
    public void deleteGame(Long id){
        gameRepository.deleteById(id);
    }

    //public Game addUserName(String userName){ return gameRepository.save(userName)}
}
