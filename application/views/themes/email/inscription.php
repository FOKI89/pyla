<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Votre inscription sur Pila</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head>
    <body>
        <div style="width:600px; margin:0px auto;">
            <h3 style="text-align: center">
                    Bienvenue sur Pila!
                    <br>
            </h3>
            <br><?php echo $prenom;?> <?php echo $nom;?>,
            <br>
            <br>Merci d'avoir créé votre compte.
            <br>
            <br>Afin d'activer votre compte, veuillez confirmer votre adresse email en cliquant sur le bouton ci-dessous.
            <br>
            <br>
            <br>
            <div style="text-align: center">
                <a style="text-decoration:none;font-family:'Roboto-Medium';cursor:pointer;background:#2196f3;color:#ffffff;border-top:10px solid #2196f3;border-bottom:10px solid #2196f3;border-left:20px solid #2196f3;border-right:20px solid #2196f3;" href="http://localhost:8888/Pyla/activation?t=<?php echo $token; ?>" >
                    <strong>Confirmer mon adresse email</strong>
                </a>
            </div>
            <br>
            <br>A bientôt,
            <br>L'équipe Pila
        </div>
    </body>
</html>
