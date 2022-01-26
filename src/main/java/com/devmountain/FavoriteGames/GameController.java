package com.devmountain.FavoriteGames;

import com.devmountain.FavoriteGames.model.Game;
import com.devmountain.FavoriteGames.service.GameService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/game")
public class GameController {
    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/all")
    public ResponseEntity<List<Game>> getAllGames() {
        List<Game> games = gameService.findAllGames();
        return new ResponseEntity<>(games, HttpStatus.OK);
    }


    @GetMapping("/find/{id}")
    public ResponseEntity<Game> getGameById(@PathVariable("id") Long id) {
        Game game = gameService.findGameById(id);
        return new ResponseEntity<>(game, HttpStatus.OK);
    }

    //finding all games with specific playerId
    @GetMapping("/player/{id}")
    public ResponseEntity<List<Game>> findAllGamesByPlayerId(@PathVariable("id") Long id){
        List<Game> games = gameService.findAllGamesByPlayerId(id);
        return new ResponseEntity<>(games, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/add")
    public ResponseEntity<Game> addGame(@RequestBody Game game){
        Game newGame = gameService.addGame(game);
        return new ResponseEntity<>(newGame, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Game> updateGame(@RequestBody Game game){
        Game updateGame = gameService.updateGame(game);
        return new ResponseEntity<>(updateGame, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteGame(@PathVariable("id") Long id){
        gameService.deleteGame(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
