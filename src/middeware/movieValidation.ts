import {body} from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
        .isString()
        .withMessage("O titulo é obrigatório")
        .isLength({ min: 5})
        .withMessage("O titulo precisa ter no mínimo 5 caracteres"),
    
    body("rating")
        .isNumeric()
        .withMessage("A note precisa ser um numero")
        .custom((value: number) => {
         if(value < 0 || value> 10) {
          throw new Error("A nota precisa ser entre 0 a 10")               
        }        
           return true          
        }),
    body("description")
        .isString()
        .withMessage("A descrição é obrigatória"),

    body("director")
         .isString()
         .withMessage("o nome do diretor é obrigatório"),
    body("poster")
        .isURL()
        .withMessage("A imagem precisa ser uma URL"),    
     
  ] 
   
   
  
}