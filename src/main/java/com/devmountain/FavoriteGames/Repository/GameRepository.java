package com.devmountain.FavoriteGames.Repository;

import com.devmountain.FavoriteGames.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
    Game findGameById(Long id);
}
