# Informe de Práctica 1: Configuración de Máquina Virtual en el IaaS
#### Autor: ***TOMÁS JAVES TOMMASONE***
#### Profesor: ***Dr. EDUARDO MANUEL SEGREDO GONZALEZ*** 
#### Asignatura: ***DESARROLLO DE SISTEMAS INFORMÁTICOS***
#### Universidad: ***UNIVERSIDAD DE LA LAGUNA***
#### Ubicación: ***SAN CRISTOBAL DE LA LAGUNA***
#### Fecha: ***28/01/2024***
#### Índice:  
1. [_Objetivo_](#1-objetivo)
2. [_Base Administrativa y de Conocimiento_](#2-base-administrativa-y-de-conocimiento)
3. [_Configuración Técnica_](#3-configuración-técnica)
4. [_Personalización y Actualizaciones_](#4-personalización-y-actualizaciones)
5. [_Instalaciones Clave_](#5-instalaciones-clave)
6. [_Conclusión_](#6-conclusión)
7. [_Referencias Bibliográficas_](#7-referencias-bibliográficas)

## 1. Objetivo
En este informe vamos a ver cómo configurar una máquina virtual (VM) en el entorno IaaS de la ULL, un proceso que abarca algunos aspectos técnicos pero sobre todo nos prepara con las herramientas necesarias para el desarrollo en el tema.
Luego describiremos desde las tareas administrativas iniciales hasta la configuración final de la VM.

## 2. Base Administrativa y de Conocimiento
Comenzamos con una serie de tareas preliminares, fundamentales para sentar las bases de nuestro trabajo.  

La primera fue completar encuestas de elección de grupo y conocimientos previos, lo que nos ayudó a entender mejor nuestras expectativas y a formar equipos de trabajo eficientes. Seguidamente, confirmamos que teníamos una cuenta de GitHub vinculada a nuestro correo institucional. Este paso nos abrió las puertas a una gama de herramientas y servicios útiles para el desarrollo de software.

Luego, procedimos con la inscripción en GitHub Classroom, aceptando la asignación de la práctica, lo que nos permitió organizar y estructurar nuestro proyecto dentro de un marco educativo. Paralelamente, nos sumergimos en el aprendizaje de Markdown y la configuración de GitHub Pages, adquiriendo habilidades para documentar nuestros proyectos de manera efectiva y pública.

## 3. Configuración Técnica
El aspecto técnico comenzó con la configuración del servicio VPN de la ULL, un paso necesario para acceder al servicio IaaS desde fuera de la red universitaria (iaas.ull.es/) (en caso de no haberlo hecho anteriormente). Seguir las instrucciones específicas nos permitió establecer una conexión segura y fiable.

Una vez dentro del servicio IaaS, ingresamos nuestras credenciales ULL y seleccionamos una VM **DSI**. El proceso fue intuitivo, aunque requirió una cuidadosa atención a los detalles, como la asignación de un número identificativo a nuestra VM.

- El acceso inicial a través de la Consola VNC fue nuestra primera interacción directa con la VM. Cambiamos la contraseña por defecto para asegurar el acceso y, mediante la instalación de _"net-tools"_ con el comando:
> _sudo apt install net-tools_

- y el uso del comando:
> _"ifconfig -a"_

obtuvimos la IP necesaria para la conexión remota SSH.

## 4. Personalización y Actualizaciones
- Modificamos el nombre de host de la VM a _"iaas-dsi"_ mediante la edición del archivo "/etc/hostname", lo que nos ayudó a personalizar nuestro entorno. Esto fue logrado ejecutando:  
> _sudo vi /etc/hostname_

- Una vez que nos aseguramos de que nuestra máquina virtual estaba adecuadamente configurada y personalizada, pasamos al importante proceso de actualizar su software mediante dos comandos:
> _sudo apt update_
> _sudo apt upgrade_

- Después de que se completaran las actualizaciones, reiniciamos la máquina virtual mediante:
> _sudo reboot_

- Posterior a la actualización del software, necesitamos una sincronización con la máquina local, lo cuál fue otro paso clave. Para ello editamos el archivo _"/etc/hosts"_ para facilitar la referencia a la VM, utilizando para ello el siguiente comando:
> _sudo vi /etc/hosts_

- Dentro de este, agregamos una entrada para la dirección IP de nuestra máquina virtual junto con el nombre de host que habíamos establecido anteriormente, "iaas-dsi". Por ejemplo, si la dirección IP de la VM fuera 10.6.XXX.XXX, la línea que añadimos sería:
> _10.6.XXX.XXX    iaas-dsi_

- Además, configuramos las claves SSH, permitiéndonos un acceso seguro y sin contraseña, lo cual agilizó considerablemente nuestro flujo de trabajo.
Primero, generamos un par de claves SSH en nuestra máquina local utilizando el comando:
> _ssh-keygen_

Este comando crea un par de claves criptográficas, una pública ("id_rsa.pub") y otra privada ("id_rsa"). La clave pública es la que compartiremos con nuestra VM.

- Una vez generada la clave, utilizamos el comando siguiente comando para copiar la clave pública a la VM:
> _ssh-copy-id usuario@iaas-dsi_

Donde "usuario" es el nombre de usuario en la VM e "iaas-dsi" es el nombre de host que hemos configurado. Este comando transfiere la clave pública a la lista de claves autorizadas en la VM, permitiendo un acceso SSH sin necesidad de contraseña.

## 5. Instalaciones Clave
Instalar y configurar Git fue un paso esencial. Aunque venía preinstalado en la VM, era necesario realizar algunos ajustes en la configuración para personalizar nuestra experiencia de usuario y reflejar nuestra identidad digital en el trabajo que realizábamos.

- Para configurar Git, primero verificamos su instalación ejecutando el comando:
> _git --version_

- Al confirmar que Git estaba instalado, procedimos a configurarlo con nuestra información personal. Para ello, usamos los siguientes comandos:
> _git config --global user.name "Tu Nombre"_
> _git config --global user.email "tu.email@example.com"_

Reemplazando "Tu Nombre" y "tu.email@example.com" con nuestro nombre real y dirección de correo electrónico, respectivamente.

- Una herramienta adicional que encontramos particularmente útil fue el script "git-prompt.sh". Este script mejora la experiencia en la línea de comandos al mostrar información valiosa sobre el repositorio Git en el que estamos trabajando. Para implementarlo, primero descargamos el script desde el repositorio oficial de Git con el comando:
> _wget https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh_

- Luego, movimos el script descargado a nuestro directorio home y lo renombramos para un fácil acceso, usando el comando:
> _mv git-prompt.sh ~/.git-prompt.sh_

- Para activar el script, editamos nuestro archivo .bashrc en la VM, añadiendo las siguientes líneas al final del archivo:
> source ~/.git-prompt.sh
> PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[31m\]$(__git_ps1) \[\033[00m\]\$ '

Estas líneas cargan el script "git-prompt.sh" y actualizan el prompt del shell para incluir información del repositorio Git actual. La variable PS1 se modifica para cambiar la apariencia del prompt, incluyendo el nombre de la rama actual en la que estamos trabajando. Después de guardar los cambios y reiniciar la terminal (o ejecutar source ~/.bashrc), pudimos ver inmediatamente los beneficios de tener esta información adicional directamente en nuestro prompt.

Posteriormente, comenzamos con la clonación en nuestra máquina virtual del repositorio remoto ubicado en Github. Este paso es necesario puesto que nos permite trabajar con repositorios remotos de manera eficiente y directa, facilitando el proceso de desarrollo y colaboración. En primer lugar, es necesario copiar la URL del repositorio proporcionada por GitHub. Esta URL puede ser en forma de HTTPS o SSH, dependiendo de nuestras preferencias de seguridad y configuración.

Dado que ya habíamos configurado las claves SSH para la comunicación segura con GitHub, optamos por usar la URL SSH del repositorio. Esto nos permitió clonar el repositorio sin necesidad de introducir nuestras credenciales de GitHub cada vez, aprovechando la autenticación segura proporcionada por las claves SSH.

- En la terminal de la VM, ejecutamos el comando "git clone", seguido de la URL SSH del repositorio. Por ejemplo, el comando sería algo así como:
> _git clone git@github.com:usuario/repositorio.git_

Donde "usuario/repositorio.git" es el identificador del repositorio en GitHub.

Una vez completada la clonación, se creó un nuevo directorio en nuestra VM con el mismo nombre del repositorio. Este directorio contenía todos los archivos y carpetas del repositorio, así como la carpeta oculta .git, que alberga la información del control de versiones.

Una vez clonado el repositorio, procedemos con la instalación de Node.js en nuestra máquina virtual considerando nuestra necesidad de trabajar con tecnologías basadas en JavaScript y TypeScript. Para esto, elegimos utilizar Node Version Manager (nvm), una herramienta que nos proporciona la capacidad de instalar y administrar múltiples versiones de Node.js de manera eficiente.

- El proceso comenzó con la instalación de nvm. Para ello, utilizamos el script de instalación proporcionado en la página oficial de nvm. Ejecutamos el comando:
> _curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash_

- Este comando descarga y ejecuta el script de instalación, instalando nvm en nuestro entorno. Después de la instalación, cargamos nvm en la sesión actual ejecutando:
> _source ~/.nvm/nvm.sh_

Permitiéndonos utilizar nvm de inmediato.

- Con nvm ya instalado, procedimos a instalar Node.js. Para ver las versiones disponibles, utilizamos el comando:
> _nvm list-remote_

- Decidimos instalar la versión más reciente de Node.js para asegurarnos de tener las últimas funcionalidades y mejoras de seguridad. El comando utilizado fue:
> _nvm install node_

Que instala automáticamente la última versión estable de Node.js.

- Una vez completada la instalación, verificamos que Node.js estaba correctamente instalado ejecutando:
> _node --version_

- Lo cual nos mostró la versión de Node.js que acabábamos de instalar. También comprobamos la instalación de npm (Node Package Manager), que se instala automáticamente con Node.js, mediante:
> _npm --version_

- La ventaja de usar nvm no se limita solo a instalar Node.js; también nos permite gestionar múltiples versiones de Node.js en una misma máquina. Esto es especialmente útil cuando se trabaja en diferentes proyectos que pueden requerir diferentes versiones de Node.js. Para cambiar entre versiones instaladas, simplemente utilizamos el comando:
> _nvm use \<version>_

Donde "\<version>" es la versión específica de Node.js que deseamos utilizar.

## 6. Conclusión
En conclusión, gracias a este proceso, desde las encuestas iniciales hasta la configuración técnica de la VM, pudimos aprender y repasar (en ciertas ocasiones) no solo a manejar herramientas técnicas como **SSH, Git y Node.js**, sino también la importancia de la documentación efectiva y el uso de Markdown y GitHub Pages.

Este informe, creado con Markdown y alojado en GitHub Pages, no solo sirve como documentación de nuestro trabajo, sino también como prueba del aprendizaje práctico e integral en el mundo del desarrollo de software.

## 7. Referencias Bibliográficas
- _Práctica 1. Configuración de máquina virtual en el IaaS_: https://ull-esit-inf-dsi-2324.github.io/prct01-iaas/
