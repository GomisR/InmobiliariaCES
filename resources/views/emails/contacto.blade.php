
<h2>Nuevo mensaje de contacto recibido</h2>

<p><strong>Nombre:</strong> {{ $datos['nombre'] }}</p>
<p><strong>Teléfono:</strong> {{ $datos['telefono'] }}</p>
<p><strong>Email:</strong> {{ $datos['email'] }}</p>
<p><strong>Mensaje:</strong><br>{{ $datos['mensaje'] }}</p>

<p><strong>Acepta comunicaciones:</strong> {{ isset($datos['comunicaciones']) && $datos['comunicaciones'] ? 'Sí' : 'No' }}</p>
