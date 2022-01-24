package com.devmountain.FavoriteGames.Repository;

import com.devmountain.FavoriteGames.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    Player findPlayerById(Long id);

    Player findPlayerByUserName(String userName);
}
