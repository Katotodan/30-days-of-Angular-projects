import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NgFor,
    NgIf,
    NgStyle
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'tic-tac-toe-game';
  iterateValue: string[] = ["", "", "", "", "", "", "", "", ""];
  currentPlayer:string = "X"
  count:number = 0;
  game_over = false;
  tieGame = false;
  isDisabled = false;

  cellClicked(index:any){
    if(!this.iterateValue[index]){
      this.iterateValue[index] = this.currentPlayer;
      this.count++
      if(this.gameOVer()){
        this.game_over = true
        // Unable click event of cell
        this.isDisabled = true;
      }else{
        if(this.count === 9){
          this.game_over = true;
          this.tieGame = true;
        }else{
          this.currentPlayer === "X" ? this.currentPlayer = "0" : this.currentPlayer = "X"
        }
      }
      
      
    }
    
    
    this.gameOVer();
    
  }

  gameOVer(): boolean{
    if(this.currentPlayer === this.iterateValue[0] && this.currentPlayer === this.iterateValue[1] && 
      this.currentPlayer === this.iterateValue[2]
    ){
      return(true)
    }else if(
      this.currentPlayer === this.iterateValue[3] && this.currentPlayer === this.iterateValue[4] && 
      this.currentPlayer === this.iterateValue[5]
    ){
      return(true)
    }else if(
      this.currentPlayer === this.iterateValue[6] && this.currentPlayer === this.iterateValue[7] && 
      this.currentPlayer === this.iterateValue[8]
    ){
      return(true)
    }else if(
      this.currentPlayer === this.iterateValue[0] && this.currentPlayer === this.iterateValue[3] && 
      this.currentPlayer === this.iterateValue[6]
    ){
      return(true)
    }else if(
      this.currentPlayer === this.iterateValue[1] && this.currentPlayer === this.iterateValue[4] && 
      this.currentPlayer === this.iterateValue[7]
    ){
      return(true)
    }else if(
      this.currentPlayer === this.iterateValue[2] && this.currentPlayer === this.iterateValue[5] && 
      this.currentPlayer === this.iterateValue[8]
    ){
      return(true)
    }else if(
      this.currentPlayer === this.iterateValue[0] && this.currentPlayer === this.iterateValue[4] && 
      this.currentPlayer === this.iterateValue[8]
    ){
      return(true)
    }else if(
      this.currentPlayer === this.iterateValue[2] && this.currentPlayer === this.iterateValue[4] && 
      this.currentPlayer === this.iterateValue[6]
    ){
      return(true)
    }
    return false
  }

  restart(){

  }
  

  
}
// Trying to set the value of a div when clicked