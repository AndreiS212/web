package com.videography.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "mediafiles")
@Getter
@Setter
public class MediaFile {

    @Id
    private Long id;

    private String filename;
    private String contentType;
    private byte[] data;
}
