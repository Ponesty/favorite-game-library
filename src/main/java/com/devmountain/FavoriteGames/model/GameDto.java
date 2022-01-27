package com.devmountain.FavoriteGames.model;

import javax.persistence.*;

public class GameDto {


    private Long id;
    private String title;
    private String imageURL;
    private String description;
    private String videoURL;



    private Player player;

    public GameDto(String title, String imageURL, String description, String videoURL, Player player) {
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.videoURL = videoURL;
        this.player = player;
    }

    public GameDto() {
    }

    public GameDto(Long id, String title, String imageURL, String description, String videoURL, Player player) {
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.videoURL = videoURL;
        this.player = player;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVideoURL() {
        return videoURL;
    }

    public void setVideoURL(String videoURL) {
        this.videoURL = videoURL;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }
}
