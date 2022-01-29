package com.devmountain.FavoriteGames.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Game implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String title;
    private String imageURL;
    private String description;
    private String videoURL;


    @ManyToOne()
    @JoinColumn(name = "player_id")
    private Player player;

    public Game(GameDto gameDto){
        this.title = gameDto.getTitle();
        this.imageURL = gameDto.getImageURL();
        this.description = gameDto.getDescription();
        this.videoURL = gameDto.getVideoURL();
        this.player = gameDto.getPlayer();
    }


    public Game() {
    }

    public Game(String title, String imageURL, String description, String videoURL, Player player) {
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

    public void setDesc(String description) {
        this.description = description;
    }

    public String getVideoURL() {
        return videoURL;
    }

    public void setVideoURL(String videoURL) {
        this.videoURL = videoURL;
    }


    @Override
    public String toString() {
        return "Game{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", imageURL='" + imageURL + '\'' +
                ", description='" + description + '\'' +
                ", videoURL='" + videoURL + '\'' +
                '}';
    }
}
