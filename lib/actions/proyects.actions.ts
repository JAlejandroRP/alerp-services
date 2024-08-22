import { ActionResponse } from "../constants";
import { Proyect } from "../models/proyect.model";
import { handleError } from "../utils";

interface GetProyectsResponse extends ActionResponse {
  data: Proyect[] | null
}

export async function getProyects(): Promise<GetProyectsResponse> {
  try {
    const proyectsName = process.env.PROYECTS?.split(' ');
    const proyectsUrl = process.env.PROYECTS_URL?.split(' ');
    const proyectsDesc = process.env.PROYECTS_DESC?.split('~');

    if (!proyectsName || !proyectsUrl || !proyectsDesc) {
      throw 'Missing some of Proyects env variables'
    }

    const proyectsList: Proyect[] = []

    for (let index = 0; index < proyectsName.length; index++) {
      const proyect: Proyect = {
        name: proyectsName[index],
        description: proyectsDesc[index],
        url: new URL(proyectsUrl[index])
      }

      // console.log(proyect.url);
      

      if (!proyect.name || !proyect.description || !proyect.url) throw 'Missing props for proyect'

      proyectsList.push(proyect)
    }

    return {
      data: proyectsList,
      error: null,
    }
  } catch (error) {
    return {
      error: handleError(error),
      data: null
    }
  }
}