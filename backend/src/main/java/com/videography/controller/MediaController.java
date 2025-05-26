package com.videography.controller;

import com.videography.entity.MediaFile;
import com.videography.repository.MediaFileRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/media")
@Getter
@Setter
public class MediaController {

    private final MediaFileRepository repository;

    public MediaController(MediaFileRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/photo/{id}")
    public ResponseEntity<byte[]> getPhotoById(@PathVariable Long id) {
        return getMediaFileResponse(id);
    }

    @GetMapping("/video/{id}")
    public ResponseEntity<byte[]> getVideoById(@PathVariable Long id) {
        return getMediaFileResponse(id);
    }

    // Helper method to avoid duplicate code
    private ResponseEntity<byte[]> getMediaFileResponse(Long id) {
        Optional<MediaFile> mediaFileOptional = repository.findById(String.valueOf(id));

        if (mediaFileOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        MediaFile mediaFile = mediaFileOptional.get();

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(mediaFile.getContentType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + mediaFile.getFilename() + "\"")
                .body(mediaFile.getData());
    }

    // Return all media metadata (filenames and IDs), not raw bytes for all files
    @GetMapping("/photos")
    public ResponseEntity<List<MediaFileMetadata>> getAllPhotosMetadata() {
        List<MediaFile> photos = repository.findAllByContentTypeStartingWith("image/");
        if (photos.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        List<MediaFileMetadata> metadataList = photos.stream()
                .map(file -> new MediaFileMetadata(file.getId(), file.getFilename()))
                .toList();

        return ResponseEntity.ok(metadataList);
    }

    @GetMapping("/videos")
    public ResponseEntity<List<MediaFileMetadata>> getAllVideosMetadata() {
        List<MediaFile> videos = repository.findAllByContentTypeStartingWith("video/");
        if (videos.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        List<MediaFileMetadata> metadataList = videos.stream()
                .map(file -> new MediaFileMetadata(file.getId(), file.getFilename()))
                .toList();

        return ResponseEntity.ok(metadataList);
    }

    // DTO class to return lightweight metadata only
    @Getter
    @Setter
    public static class MediaFileMetadata {
        private Long id;
        private String filename;

        public MediaFileMetadata(Long id, String filename) {
            this.id = id;
            this.filename = filename;
        }
    }
}
