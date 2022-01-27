package com.devmountain.FavoriteGames.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

public class PlayerDto {

    private Long id;
    private String userName;
    private String email;
    private String password;



    private List<Game> games = new ArrayList<>();

    public PlayerDto() {
    }

    public PlayerDto(Long id, String userName, String email, String password) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    public PlayerDto(String userName, String email, String password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
}
