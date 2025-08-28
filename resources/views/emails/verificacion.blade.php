<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Verificación de cuenta - Inmobiliaria CES</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 2rem;
            color: #333;
        }
        .container {
            background-color: #fff;
            padding: 2rem;
            border-radius: 8px;
            max-width: 600px;
            margin: auto;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .logo {
            text-align: center;
            margin-bottom: 1.5rem;
        }
        .logo img {
            width: 120px;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #007BFF;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 1rem;
        }
        .footer {
            margin-top: 2rem;
            font-size: 0.875rem;
            color: #666;
            text-align: center;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="logo">
        <img src="{{ asset('storage/app/public/images/logo.png') }}" alt="Inmobiliaria CES">
    </div>

    <h2>¡Gracias por registrarte en Inmobiliaria CES!</h2>
    <p>Para completar tu registro y activar tu cuenta, por favor haz clic en el siguiente botón:</p>

    <p style="text-align: center;">
        <a href="{{ url('/verificar/' . $token) }}" target="_blank" rel="noopener">
            Verificar mi cuenta
        </a>
    </p>

    <p>Si no te has registrado recientemente, puedes ignorar este mensaje.</p>

    <div class="footer">
        Inmobiliaria CES &copy; {{ date('Y') }}<br>
        <a href="{{ url('/') }}">www.inmobiliariaces.com</a>
    </div>
</div>
</body>
</html>
