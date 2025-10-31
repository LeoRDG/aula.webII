<!doctype html>
<html lang="en">
    <head>
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />


        <!-- Bootstrap CSS v5.2.1 -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
    </head>

    <body>
        <h1>Introdução PHP</h1>
        <?php 
            $nome = 'Leo';
            $email = 'leoadsads@fdsdsf.com';
            $pos = strpos($email, '@');

            if ($pos) {
                echo "<p> Posição do @ $pos </p>";
                $user = substr($email,0,$pos);
                $server = substr($email,$pos+1);
                echo "<p> Usuário = $user </p>";
                echo "<p> Servidor = $server </p>";
            }
            else echo "Email invalido";
            date_default_timezone_set('America/Sao_Paulo');
            echo "<p> Aleatorio entre 1 e 60: " . rand(1, 60) . "</p>";
            echo "<p> Data de Hoje: " . date('D, d M Y H:i:s') . "</p>";

            $hj = date_create();
            echo "<p> Data formatada : " . date_format($hj, 'd/m') . "</p>";

            $dtvenc = date_create_from_format("d/m/Y", "30/10/2026");
            echo "<p> Data boleto : " . date_format($dtvenc, 'd/m/Y') . "</p>";

            $diff = date_diff($hj, $dtvenc);
            echo "<p> Nr de dias vencimento boleto: " . $diff->format("%a") . "</p>";

            $valor = 10.5;
            $cars=['Monza'];
            $cars[] = 'Fusca';
            $cars[] = 'Gol';
            $cars[] = 'Uno';

            rsort($cars);

            echo "<table class='table'>";
            foreach ($cars as $car) echo "<tr><td>$car</td></tr>";
            echo "</table>";
            
            echo "<h2> Hello $nome PHP!! </h2>";
            echo "<p>" .count($cars) . " Carros</p>";
        ?>

        <script>
            document.write("<h2> Hello World JS!! </h2>")
        </script>

        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
    </body>
</html>
