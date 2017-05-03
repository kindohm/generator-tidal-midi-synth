module <%= moduleName %> where

import Sound.Tidal.Params
import Sound.Tidal.MIDI.Control

-- example custom MIDI parameter
(customParam, customParam_p) = pF "customParam" (Just 0)

<%= controllerName %> :: ControllerShape
<%= controllerName %> = ControllerShape { controls = [
                            -- wire up custom MIDI params to CC values here
                            mCC customParam_p 1
                          ],
                         latency = 0.5
                       }

synth = toShape <%= controllerName %>