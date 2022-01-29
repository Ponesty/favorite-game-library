package com.devmountain.FavoriteGames.Repository;

import com.devmountain.FavoriteGames.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GameRepository extends JpaRepository<Game, Long> {
    Game findGameById(Long id);

    List<Game> findAllGamesByPlayerId(Long id);

    //void deleteGameById(Long id);
}
