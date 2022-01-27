package com.devmountain.FavoriteGames.service;

import com.devmountain.FavoriteGames.Repository.GameRepository;
import com.devmountain.FavoriteGames.Repository.PlayerRepository;
import com.devmountain.FavoriteGames.model.Game;
import com.devmountain.FavoriteGames.model.GameDto;
import com.devmountain.FavoriteGames.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {
    private final GameRepository gameRepository;
    private final PlayerRepository playerRepository;

    @Autowired
    public GameService(GameRepository gameRepository, PlayerRepository playerRepository) {
        this.gameRepository = gameRepository;
        this.playerRepository = playerRepository;
    }



    //Posting new game to table
    public Game addGame(GameDto gameDto, Long id){
        Player player = playerRepository.findPlayerById(id);
        gameDto.setPlayer(player);
        Game game = new Game(gameDto);
        return gameRepository.saveAndFlush(game);
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
