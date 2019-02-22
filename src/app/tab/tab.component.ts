import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
$(function(){
$.ajax({
 type:'GET',
 url:"https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=8ec58347383a461e8fbc05407c025e30&pageSize=10",
 data:'html',
 success: function(result){
    for(var i=0;i<result.totalResults;i++){
      $("table").append("<tr> <td>"+(result.articles[i].author)+"</td>"+"<td>"+(result.articles[i].title)+"</td>"+"<td>"+(result.articles[i].description)+"</td>");
    }
    $(function(){

          $('td').mouseenter(function(){
            $(this).animate({fontSize: "20px"},2000);
          });

          $('td').mouseleave(function(){
           $(this).animate({fontSize: "16px"},2000);
         });
        });
 },
 error: function(xhr){
 console.log("error")
 }
});
});
