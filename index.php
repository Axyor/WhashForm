<!DOCTYPE html>
<?php
$json = file_get_contents("clients.json");
$clients = json_decode($json, true);

?>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clean 3000</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lobster+Two&family=Montserrat:wght@500&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        <div class="title">
            <img src="./img/logo-clean3000-mini.png" alt="" />
            <div class="textTitle">
                <h1>Clean 3000</h1>
                <p>Bonjour cher collaborateur 👋</p>
            </div>

        </div>


        <h2>Choisissez votre Client</h2>

        <div id="clientsList">
            <?php

            foreach ($clients as $client) {
            ?>
                <a href="" id="<?= $client["id"]; ?>" class="client"><?= $client["name"]; ?></a>
            <?php
            }
            ?>
            <a href="index.php" class="edit">Editer</a>
        </div>
    </header>

    <section id="avisP">
        <div class="container">
            <h2>Avis de passage</h2>
            <p>Nom entreprise/ou client :
            <p id="clientName"></p>
            </p>
            <p>Notre technicien est intervenu pour l'entretien de la vitrerie le
            <p id="dateNow"></p>
            </p>
            <p>Observations : </p>
            <textarea name="observ" id="observ" rows="4"></textarea>
            <p>Merci de votre confiance.</p>
            <p>Signature du technicien:</p>
            <textarea name="technSign" id="technSign" rows="2"></textarea>

            <p>Signature du client/Cachet de l'entreprise :</p>
            <textarea name="clientSign" id="clientSign" rows="2"></textarea>
            <div class="buttons">
                <a onclick="window.print('#avisP')">Enregistrer votre avis</a>
                <a href="index.php" class="edit">Editer</a>
            </div>
        </div>

    </section>


    <script type="module" src="js/main.js"></script>
</body>

</html>