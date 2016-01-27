<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Votre inscription sur Pyla</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head>
    <body>
        <div style="width:600px; margin:0px auto;">
            <h3 style="text-align: center">
                    Bienvenue sur Pyla!
                    <br>
            </h3>
            <br><?php echo $prenom;?> <?php echo $nom;?>,
            <br>
            <br>Merci d'avoir créé votre compte.
            <br>
            <br>Afin de finaliser votre inscription, merci de confirmer votre adresse email en cliquant sur le bouton ci-dessous.
            <br>
            <br>
            <br>
            <div style="text-align: center">
<<<<<<< HEAD
                <a style="text-decoration:none;cursor:pointer;background:#80CA3E;color:#ffffff;border-top:10px solid #80CA3E;border-bottom:10px solid #80CA3E;border-left:20px solid #80CA3E;border-right:20px solid #80CA3E;" href="http://localhost:8888/Pyla/activation?t=<?php echo $token; ?>" >
=======
                <a style="text-decoration:none;cursor:pointer;background:#80CA3E;color:#ffffff;border-top:10px solid #80CA3E;border-bottom:10px solid #80CA3E;border-left:20px solid #80CA3E;border-right:20px solid #80CA3E;" href="http://localhost:8888/Pyla/utilisateur/activation?t=<?php echo $token; ?>" >
>>>>>>> 09e817904ab57cdbf1bc9f7063f24f91f16d880d
                    <strong>Confirmer mon adresse email</strong>
                </a>
            </div>
            <br>
            <br>A bientôt,
            <br>L'équipe Pyla
        </div>
    </body>
</html>
