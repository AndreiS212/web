package com.videography.repository;

import com.videography.entity.MediaFile;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MediaFileRepository extends MongoRepository<MediaFile, String> {
    List<MediaFile> findAllByContentTypeStartingWith(String prefix);
}
