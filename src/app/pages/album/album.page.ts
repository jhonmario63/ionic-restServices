import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/pages/album/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {

  information = null;
  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('albumId');

    this.albumService.getDetails(id).subscribe(result => {
      this.information = result;
    })
  }

}
